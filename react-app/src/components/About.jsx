import "../styles/About.css";

const About = () => {
    return (
        <>
                    <h1 class="header-1">About Me</h1>
                    <p class="light-blue-text">Hi! My name is Carson Colyer. I am a third year UVA student studying Computer Science with a minor in Data Science in the College of Arts and Sciences</p>
                    <div class="fun-facts">
                        <h2>Fun Facts:</h2>
                        <ul>
                            <li>I play guitar in a band called The Pickup Limes</li>
                            <li>I like to hang out with my friends</li>
                            <li>My favorite sport is football</li>
                            <li>My favorite band is blink-182</li>
                        </ul>
                    </div>
                    <h2 id="band-title">The Pickup Limes</h2>
                    <p>The Pickup Limes are an award-winning rock band hailing from Northern Virginia. They are working on their debut EP currently on track for release this summer.</p>
                    <a href="https://linktr.ee/thepickuplimes">Here is a link to my band's music</a>
        </>
    );
};

export default About;