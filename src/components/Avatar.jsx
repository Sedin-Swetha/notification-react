export default function Avatar({name,avatarUrl})
{
    return (
        <div className="avatar">
            {avatarUrl ?(
                <img src ={avatarUrl} alt="avatar" className="avatar-img"/>
            ):(
                <div className="avatar-fallback">{name[0]}</div>
            )}
        </div>
    );
}