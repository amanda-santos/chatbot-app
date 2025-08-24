import type { Project } from "../types";
import { MOCKED_PROJECT } from "./mockedData";

export default function useProjects() {
  const projects = useState<Project[]>("projects", () => [MOCKED_PROJECT]);

  function createProject() {
    const id = (projects.value.length + 1).toString();
    const project = {
      id,
      name: "New Project",
    };

    projects.value.push(project);

    return project;
  }

  return { projects, createProject };
}
