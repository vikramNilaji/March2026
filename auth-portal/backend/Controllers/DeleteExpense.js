

export const DeleteExpense =  async (req, res) => {
   try {
     const { id } = req.params;
     
     // findByIdAndDelete looks for the specific document and removes it
     const deletedExpense = await Expense.findByIdAndDelete(id);
 
     if (!deletedExpense) {
       return res.status(404).json({ message: "Expense not found!" });
     }
 
     res.status(200).json({ message: "Expense deleted successfully" });
   } catch (error) {
     res.status(500).json({ message: "uhaaa... delete failed", error: error.message });
   }
 };



