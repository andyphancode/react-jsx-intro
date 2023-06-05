const Tweet = (props) => {
    return (
        <div class="tweet">
            <span>{props.message}</span>
            <br></br>
            <span>{props.name}</span>
            <span>  @{props.username}</span>
            <span>  <b>{props.date}</b></span>
        </div>
    );
};