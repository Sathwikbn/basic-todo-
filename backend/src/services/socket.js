const configureSocket = (io) => {
  io.on("connection", (socket) => {
    socket.on("tasks:join", (workspaceId) => {
      socket.join(workspaceId);
    });

    socket.on("tasks:update", ({ workspaceId, payload }) => {
      socket.to(workspaceId).emit("tasks:sync", payload);
    });
  });
};

module.exports = { configureSocket };
