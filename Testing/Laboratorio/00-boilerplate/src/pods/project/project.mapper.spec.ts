import { mapProjectFromApiToVm } from './project.mapper';
import * as apiModel from './api/project.api-model';
import * as viewModel from './project.vm';

describe('./pods/project/project.mapper', () => {
  it('should return empty project when feeding null value', () => {
    // Arrange
    const project = null;

    // Act
    const result = mapProjectFromApiToVm(project);

    // Assert
    expect(result).toEqual(viewModel.createEmptyProject());
  });

  it('should return empty project when feeding undefined value', () => {
    // Arrange
    const project = undefined;

    // Act
    const result = mapProjectFromApiToVm(project);

    // Assert
    expect(result).toEqual(viewModel.createEmptyProject());
  });

  it('should return expected result but feeding null project list', () => {
    // Arrange
    const project: apiModel.Project = {
      id: 'test id',
      name: 'test name',
      externalId: '12345',
      isActive: true,
      comments: 'test comment',
      employees: null,
    };

    const expectedResult: viewModel.Project = {
      id: 'test id',
      name: 'test name',
      externalId: '12345',
      isActive: true,
      comments: 'test comment',
      employees: [],
    };

    // Act
    const result = mapProjectFromApiToVm(project);

    // Assert
    expect(result).toEqual(expectedResult);
  });

  it('should return expected result but feeding undefined project list', () => {
    // Arrange
    const project: apiModel.Project = {
      id: 'test id',
      name: 'test name',
      externalId: '12345',
      isActive: true,
      comments: 'test comment',
      employees: undefined,
    };

    const expectedResult: viewModel.Project = {
      id: 'test id',
      name: 'test name',
      externalId: '12345',
      isActive: true,
      comments: 'test comment',
      employees: [],
    };

    // Act
    const result = mapProjectFromApiToVm(project);

    // Assert
    expect(result).toEqual(expectedResult);
  });

  it('should return expected result feeding correct values', () => {
    // Arrange
    const project: apiModel.Project = {
      id: 'test id',
      name: 'test name',
      externalId: '12345',
      isActive: true,
      comments: 'test comment',
      employees: [
        {
          id: '0001',
          isAssigned: true,
          employeeName: 'test employee name'
        },
      ],
    };

    const expectedResult: viewModel.Project = {
      id: 'test id',
      name: 'test name',
      externalId: '12345',
      isActive: true,
      comments: 'test comment',
      employees: [
        {
          id: '0001',
          isAssigned: true,
          employeeName: 'test employee name'
        },
      ],
    };

    // Act
    const result = mapProjectFromApiToVm(project);

    // Assert
    expect(result).toEqual(expectedResult);
  });
});
