import React from "react";

export const Demo: React.FC = () => {
    const [visible, setVisible] = React.useState(true);

    return (
        <div id="demo">
            <button onClick={() => setVisible(!visible)}>Toggle visible</button>
            {visible && <MyChidlComponent />}
        </div>
    )

}

export const MyChidlComponent: React.FC = () => {
    const [count, setCount]=React.useState(0);
    const [userInfo, setUserinfo] = React.useState({
        name: "John",
        lastname: "Doe",
    });

    const handleNameChange = (value:string) =>{
        setUserinfo({
            ...userInfo,
            name:value
        });
    };

    const mappedMemoized = React.useMemo(()=>{
        return{
            firstName:userInfo.name,
            lastName:userInfo.lastname,
        }
    },[userInfo.name, userInfo.lastname])

    React.useEffect(() => {
        console.log("Ha cambiado NAME", userInfo.name)
    }, [userInfo.name]);

    React.useEffect(() => {
        console.log("Ha cambiado LASTNAME", userInfo.lastname)
    }, [userInfo.lastname]);

    return (
        <>
            <h4>Hello from child component</h4>
            <button onClick={()=> setCount(count+ 1)}>Increment {count}</button>
            <DisplayName userInfo={mappedMemoized} />
            <input
                value={userInfo.name}
                onChange={(e) => handleNameChange(e.target.value)}
            />
            <input
                value={userInfo.lastname}
                onChange={(e) =>
                    setUserinfo({
                        ...userInfo,
                        lastname: e.target.value,
                    })
                }
            />
        </>
    )
};

interface Props {
    userInfo:{
        firstName: string;
        lastName:string;
    }
}

const DisplayName: React.FC<Props> = React.memo((props) => {
    const { userInfo} = props;
    console.log("Me estoy renderizando!!", userInfo)
    return <h3>{userInfo.firstName} {userInfo.lastName}</h3>
});