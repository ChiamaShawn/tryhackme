import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import Tasks from '../../modules/Tasks/Tasks';

const TaskForm = ({ onClose, activeTask }) => {
  const [formMode, setMode] = useState('create');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useState(() => {
    console.log(activeTask);
    if (activeTask) {
      setMode('edit');
      setTitle(activeTask.title);
      setDescription(activeTask.description);
    }
  }, []);


  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formMode);
    try {
      if(formMode === 'create') {
        let response = await Tasks.createTask(title, description);
        if (response) {
          alert('Task created successfully');
        }
      setTitle('');
      setDescription('');
      } else if(formMode == 'edit'){
        let response = await Tasks.editTask(activeTask._id, title, description);
        if (response) {
          alert('Task edited successfully');
          return response;
        }
      }
    } catch (error) {
      console.log('Error Saving task:', error);
      alert('Error Saving task');
    }
  };

  return (
    <Modal show={true} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add New Task</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="title">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="description">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Form.Group>
          <Button variant="primary" onClick={handleSubmit}>
            Save Task
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};



export default TaskForm;