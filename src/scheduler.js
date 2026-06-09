const moment = require('moment');
const _ = require('lodash');

const tasks = [];

const scheduleTask = (name, runAt) => {
  const task = {
    id: tasks.length + 1,
    name,
    runAt: moment(runAt).toISOString(),
    createdAt: moment().toISOString(),
  };
  tasks.push(task);
  return task;
};

const getOverdueTasks = () => {
  return _.filter(tasks, (task) => moment().isAfter(task.runAt));
};

const groupByDay = () => {
  return _.groupBy(tasks, (task) => moment(task.runAt).format('YYYY-MM-DD'));
};

module.exports = { scheduleTask, getOverdueTasks, groupByDay };