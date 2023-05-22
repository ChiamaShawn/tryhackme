
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { Container, Row, Col, Button, Form, Table, FormText } from 'react-bootstrap';
import TaskForm from './TaskForm';
import Tasks from '../../modules/Tasks/Tasks';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [activeTask, setActiveTask] = useState(null);
  const [searchParam, setSearchParam] = useState('');
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [editTask, setEditTask] = useState('');
  const [editTaskId, setEditTaskId] = useState(null);
  const [showModal, setShowModal] = useState(false);


  useEffect(() => {
    getTasks()
  }, []);

  async function getTasks() {
    const tasks = await Tasks.fetchTasks();
    setTasks(tasks);
    setFilteredTasks(tasks);
  }
  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setActiveTask(null);
    setShowModal(false);
  };

  const handleEditTask = (task) => {
    setActiveTask(task)
    setShowModal(true);
    getTasks();
  };

  const handleDeleteTask = async (task) => {

    const deleteTaskConfirm = window.confirm("Do you want to delete this task?")
    if (deleteTaskConfirm) {
      const deleteTask = await Tasks.deleteTask(task._id);
      getTasks();
    }
  };

  const searchKeyword = async (keyword) => {
    const searchQuery = keyword.toLowerCase();
    const filtered = tasks.filter((task) =>
      task.title.toLowerCase().includes(searchQuery) || task.description.includes(searchQuery)
    );
    setFilteredTasks(filtered);
  }

  return (
    <Container>
      <Row>
        <Col>
          <h3>Tasks</h3>
          <Row>
            <Col>
              <Form.Group controlId="search">
                <Form.Control
                  type="text"
                  placeholder="Search"
                  onChange={(e) => searchKeyword(e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col></Col>
            <Col>
              <Button onClick={openModal} className="btn btn-primary mb-3">
                Create Task
              </Button>
            </Col>
          </Row>
          <Table striped bordered>
            <thead>
              <tr>
                {/* <th>ID</th> */}
                <th>Title</th>
                <th>Description</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredTasks.length > 0 ? filteredTasks.map((task) => (
                <tr key={task._id}>
                  {/* <td>{task.id}</td> */}
                  <td>{task.title}</td>
                  <td>{task.description}</td>
                  <td>
                    <Button
                      variant="info"
                      onClick={() => handleEditTask(task)}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="danger"
                      onClick={() => handleDeleteTask(task)}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              )) : null}
            </tbody>
          </Table>
        </Col>
      </Row>
      <Row>
        <Col>
          {editTaskId ? (
            <>
              <h2>Edit Task</h2>
              <Form>
                <Form.Group controlId="editTask">
                  <Form.Label>Title</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter task title"
                    value={editTask}
                    onChange={(e) => setEditTask(e.target.value)}
                  />
                </Form.Group>
                <Button variant="primary"
                // onClick={handleUpdateTask}
                >
                  Update Task
                </Button>
              </Form>
            </>
          ) : null}
        </Col>
      </Row>
      {showModal && (
        <TaskForm onClose={closeModal} activeTask={activeTask} />
      )}
    </Container>

  );
};

export default TaskList;