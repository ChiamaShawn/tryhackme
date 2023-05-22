class Task {
  constructor(id = null, title, description, completed = false, createdAt = new Date()) {
    this.title = title;
    this.description = description;
    this.completed = completed;
    this.createdAt = createdAt;
  }
}

// Export the Task class
module.exports = Task;