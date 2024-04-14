

const Todo = require("../model/Trans");

exports.deleteEntry = async (req, res) => {
  try {
    const {id} = req.params;
    await Todo.findByIdAndDelete(id);

    res.json({
        success: true,
        message : "Todo deleted successfully"
    })
}
catch (err) {
    res.status(500).json({
        success: false,
        error: err.message,
        message: "Server error",
      });
}
};
