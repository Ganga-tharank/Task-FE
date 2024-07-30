import axios from 'axios';


const API_URL = 'https://task-manager-server1-2.onrender.com/api/tasks/';

// const createTask = async (taskData) => {
//     try {
//       const token = localStorage.getItem('token');
//       if (!token) {
//         throw new Error('No token found. Please authenticate first.');
//       }
  
//       const config = {
//         headers: {
//           'Content-Type': 'application/json',
//           Authorization: `Bearer ${token}`, 
//         },
//       };
  
//       const response = await axios.post('http://localhost:8000/api/tasks/', taskData, config);
//       return response.data;
//     } catch (error) {
//       console.log(error);
//     }
//   };




const createTask = async (taskData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.post(API_URL, taskData, config);
      
   
    return response.data;
   
}


const getTasks = async (token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.get(API_URL, config);

    return response.data;
}

const deleteTask = async (id, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.delete(API_URL + id, config);

    return response.data;
}

const getTask = async (id, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.get(API_URL + id, config);

    return response.data;
}

const deleteTasks = async (token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.delete(API_URL, config);

    return response.data;
}

const taskService = {
    createTask,
    getTasks,
    deleteTask,
    getTask,
    deleteTasks
}

export default taskService;
