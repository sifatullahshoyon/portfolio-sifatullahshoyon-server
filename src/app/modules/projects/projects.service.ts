import { IProjectDetails } from './projects.interface';
import { Project } from './projects.model';

// create project
const createProjectIntoDB = async (
  payload: IProjectDetails,
): Promise<IProjectDetails> => {
  const result = await Project.create(payload);

  return result;
};

export const projectService = {
  createProjectIntoDB,
};
