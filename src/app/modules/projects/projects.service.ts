import { IProjectDetails } from './projects.interface';
import { Project } from './projects.model';

// create project
const createProjectIntoDB = async (
  payload: IProjectDetails,
): Promise<IProjectDetails> => {
  const result = await Project.create(payload);

  return result;
};

// Get Single Project
const getSingleProjectFromDb = async (
  id: string,
): Promise<IProjectDetails | null> => {
  const result = await Project.findById(id);

  return result;
};

// delete Single Project
const removeSingleProjectFromDb = async (id: string) => {
  await Project.findById(id);

  return null;
};

// Get All Project
const AllProjectFromDb = async () => {
  const result = await Project.find();

  return result;
};

export const projectService = {
  createProjectIntoDB,
  getSingleProjectFromDb,
  AllProjectFromDb,
  removeSingleProjectFromDb,
};
