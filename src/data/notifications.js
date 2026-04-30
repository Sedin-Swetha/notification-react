const notifications = [
  {
    type: "success",
    message: "Profile updated successfully",
    user: { name: "Swetha", avatarUrl: "" },
    isImportant: true,
  },
  {
    type: "error",
    message: "Payment failed",
    user: { name: "Rahul", avatarUrl: "" },
    isImportant: false,
  },
  {
    type: "warning",
    message: "Password is weak",
    user: { name: "Anu", avatarUrl: "" },
    isImportant: true,
  },
  {
    type: "info",
    message: "New login detected",
    user: { name: "Kiran", avatarUrl: "" },
    isImportant: false,
  },
  {
    type: "success",
    message: "Order placed",
    user: { name: "Meena", avatarUrl: "" },
    isImportant: true,
  },
];

export default notifications;