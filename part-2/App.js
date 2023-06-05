const App = () => {
    return (
        <div>
            <Tweet name="Joe" username="joeee" date={new Date().toDateString()} message="Hi." />
            <Tweet name="Boe" username="Boeee" date={new Date().toDateString()} message="Hi joe." />
            <Tweet name="Doe" username="Doeee" date={new Date().toDateString()} message="Hi boe." />
        </div>        
    );
}