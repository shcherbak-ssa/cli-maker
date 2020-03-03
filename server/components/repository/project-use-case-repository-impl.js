'use strict';

const projectsDB = require('../../../db/projects.json');

const ICreateProjectRepository = require(
  '../project/use-cases/interfaces/i-create-project-repository');
const IRenameProjectRepository = require(
  '../project/use-cases/interfaces/i-rename-project-repository');
const IDeleteProjectRepository = require(
  '../project/use-cases/interfaces/i-delete-project-repository');

const {ProjectUseCaseError} = require('../project/errors');
const ProjectDataCreator = require('../project/data/project-data');

class ProjectUseCaseRepositoryImpl {
  async createProject(accessID, projectData) {
    try {
      if( accessID in projectsDB ) {
        const projects = projectsDB[accessID];
        const projectName = projectData.getName();
        const projectID = projects.length;

        projects.push({ name: projectName, id: projectID });
        projectsDB[accessID] = [...projects];
  
        const creator = new ProjectDataCreator();
        return creator
          .setProjectID(projectID)
          .getProjectData()
      } else throw new ProjectUseCaseError('could not find user'); 
    } catch (error) {
      console.log(error);
      if( error.name !== 'ProjectError' )
        throw new ProjectUseCaseError('could not create project');
      
      throw error;
    }
  }
  async renameProject(accessID, projectData) {
    try {
      if( accessID in projectsDB ) {
        const projects = projectsDB[accessID];
        const projectID = projectData.getProjectID();
        const project = getProjectByID(projects, projectID);
        const projectName = projectData.getName();

        project.name = projectName;
        projects = projects.map((item) => item.id === projectID ? project : item);
        projectsDB[accessID] = [...projects];
  
        return projectData;
      } else throw new ProjectUseCaseError('could not find user'); 
    } catch (error) {
      console.log(error);
      if( error.name !== 'ProjectError' )
        throw new ProjectUseCaseError('could not rename project');
      
      throw error;
    }
  }
  async deleteProject(accessID, projectData) {
    try {
      if( accessID in projectsDB ) {
        const projects = projectsDB[accessID];
        const projectID = projectData.getProjectID();
        const newProjects = deleteProject(projects, projectID);

        projectsDB[accessID] = [...newProjects];  
        return projectData;
      } else throw new ProjectUseCaseError('could not find user'); 
    } catch (error) {
      console.log(error);
      if( error.name !== 'ProjectError' )
        throw new ProjectUseCaseError('could not delete project');
      
      throw error;
    }
  }
}

function getProjectByID(projects, projectID) {
  for( let project of projects )
    if( project.id === projectID ) return project;
  
  throw new ProjectUseCaseError(`could no find project with id ${projectID}`);
}
function deleteProject(projects, projectID) {
  const newProjects = [];
  for( let project of projects )
    if( project.id !== projectID ) newProjects.push(project);

  return newProjects;
}

function implementProjectUseCasesRepositories() {
  const implement = new ProjectUseCaseRepositoryImpl();
  ICreateProjectRepository.createProject = implement.createProject;
  IRenameProjectRepository.renameProject = implement.renameProject;
  IDeleteProjectRepository.deleteProject = implement.deleteProject;
}

module.exports = implementProjectUseCasesRepositories;