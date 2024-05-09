import Events from "events";

export class UserEvents extends Events.EventEmitter
{
    createPost(content)
    {
        console.log(content) ;

        // Emit this functionality as event & synchronously call event listeners in order
        // they are registered ...
        this.emit("postCreated") ;
    }
}

// create instance of class
const userEvents = new UserEvents() ;


function saveToDatabase()
{
    console.log("Data is saved to database") ;
}

function sendNotifications()
{
    console.log("Notifications are send to user") ;
}

function updateTimeline()
{
    console.log("User timeline is updated") ;
}


userEvents.addListener("postCreated",saveToDatabase) ;
userEvents.addListener("postCreated",sendNotifications) ;
userEvents.addListener("postCreated",updateTimeline) ;


userEvents.createPost("This is my content") ;
