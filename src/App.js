import "./styles.css";
import { useState } from "react";
import notifications from "./data/notifications";
import NotificationCard from "./components/NotificationCard";
import SearchBar from "./components/SearchBar";

function App()
{
  const [hasSearched, setHasSearched] = useState(false);

  if(!notifications.length)
  {
    return <p>No notifications</p>;
  }

  return (
    <div className="app">
      <h2>Notifications</h2>
      
   
      <SearchBar 
        notifications={notifications}
        onSearchChange={(searched) => setHasSearched(searched)}
      />

   
      <div className="notifications-section">
        <h3>All Notifications</h3>
        {notifications.map((item,index)=>(<NotificationCard
            key={index}
            type={item.type}
            message={item.message}
            user={item.user}
            isImportant={item.isImportant}
          />))}
      </div>
    </div>
  );
}
export default App;