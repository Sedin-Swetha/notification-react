import Card from "./Card";
import Avatar from "./Avatar";
import Alert from "./Alert";
import Badge from "./Badge";
import Button from "./Button";

export default function NotificationCard({type,message,user,isImportant})
{
    return(
        <Card>
              <div className="notification">
                  <Avatar name={user.name} avatarUrl={user.avatarUrl}/>
                  <div className="notification-content">
                       <Alert type={type} message={message}/>
                       {isImportant && <Badge/>}
                       <Button label="View"/>
                  </div>
              </div>
        </Card>
    );
}