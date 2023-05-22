import tasksAPI from './tasksAPI';

const Tasks = {
  tasks: [],

  async fetchTasks() { 
    console.log('fetching tasks');
    try {
      const tasksData = await tasksAPI.getTasks();
      console.log(tasksData);
      return tasksData.data;
    } catch (error) {
      console.error('Failed to fetch tasks:', error);
    }
  },

  async createTask(title, description) {
    try {
      const newTask = await tasksAPI.createTask(title, description);
      // setTasks([...tasks, newTask]);
      return newTask;
    } catch (error) {
      alert('Failed to create task');
      console.error('Failed to create task:', error);
    }
  },
  async editTask(id, title, description) {
    try {
      const deleteTask = await tasksAPI.editTask(id, title, description);
      return deleteTask;
    } catch (error){ 
      alert("Failed to save task.")
    }
  },

  async deleteTask(id) {
    try {
      const deleteTask = await tasksAPI.deleteTask(id);
      return deleteTask;
    } catch (error){ 
      alert("Failed to delete task.")
    }
  } 
  
}

export default Tasks;