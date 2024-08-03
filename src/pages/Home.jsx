import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";

const Home = () => {
    const ref = useRef(null);
    const { user, isAuthenticated } = useSelector((state) => state.auth);
    console.log(user, isAuthenticated);
    useEffect(() => {
        ref.current.click();
    }, []);
    return (
        <section className="banner-slider">
            {/* Carousel */}
            <div id="demo" className="carousel slide" data-bs-ride="carousel">
                {/* Indicators/dots */}
                <div className="carousel-indicators">
                    <button
                        ref={ref}
                        type="button"
                        data-bs-target="#demo"
                        data-bs-slide-to={0}
                        className="active"
                    />
                    <button
                        type="button"
                        data-bs-target="#demo"
                        data-bs-slide-to={1}
                    />
                    <button
                        type="button"
                        data-bs-target="#demo"
                        data-bs-slide-to={2}
                    />
                    <button
                        type="button"
                        data-bs-target="#demo"
                        data-bs-slide-to={3}
                    />
                </div>
                {/* The slideshow/carousel */}
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="carousel-caption">
                            <h3>Who Am I? What’s My Purpose?</h3>
                            <h4>
                                Unlock Your True Potential with Salssky’s
                                Self-Transcendence Framework. Dive into 4 Levels
                                of transformative gameplay to discover your
                                purpose, Become a Star*, and earn!
                            </h4>
                            <div className="level-content">
                                <h5>Level I - Fear</h5>
                                <p>
                                    Break through your limitations and reach new
                                    heights.
                                </p>
                            </div>
                            {/*level-content*/}
                            <div className="level-content">
                                <h5>Level II - Ego</h5>
                                <p>
                                    Connect with others and share insights to
                                    achieve greater success.
                                </p>
                            </div>
                            {/*level-content*/}
                            <div className="level-content">
                                <h5>Level III - Desire</h5>
                                <p>
                                    Gain deep insights through exclusive online
                                    audio conferences.
                                </p>
                            </div>
                            {/*level-content*/}
                            <div className="level-content">
                                <h5>Level IV - Power</h5>
                                <p>
                                    Apply your knowledge, achieve
                                    self-transcendence, and Become A
                                    Star*—Self-transcendence awakened radiance.
                                </p>
                            </div>
                            {/*level-content*/}
                            <div className="level-content">
                                <h6>Seize the Moment—Transform Now!</h6>
                                <p>
                                    Unlock 30% savings with our limited- offer.
                                    Start your journey today and reveal your
                                    true potential!
                                </p>
                            </div>
                            {/*level-content*/}
                        </div>{" "}
                        {/*carousel-caption*/}
                    </div>
                    {/*carousel-item*/}
                    <div className="carousel-item">
                        <div className="carousel-caption">
                            <h3 className="blue-text-heading">
                                Level I - The Book
                            </h3>
                            <h4>
                                Rent the Book Today: Discover, Evolve, and
                                Ignite Your Self-Transcendence!
                            </h4>
                            <h4>
                                Embark on a transformative journey with the
                                captivating audio ebook by the enigmatic
                                Salssky. Blending action, thriller, and romance,
                                "Salssky: The Choosen One "offers profound
                                insights into self-transcendence
                            </h4>
                            <div className="level-content">
                                <h5 className="blue-text-heading">
                                    Why Rent the Audio eBook?
                                </h5>
                                <p>
                                    <strong>Affordable Access :</strong> Just $4
                                    for a transformative experience.{" "}
                                </p>
                            </div>
                            {/*level-content*/}
                            <div className="level-content">
                                <p>
                                    <strong>Captivating Story :</strong> Follow
                                    Salssky's thrilling quest for
                                    self-transcendence.{" "}
                                </p>
                            </div>
                            {/*level-content*/}
                            <div className="level-content">
                                <p>
                                    <strong>Engaging Experience :</strong> Dive
                                    into a narrative filled with mystery and
                                    enlightment.{" "}
                                </p>
                            </div>
                            {/*level-content*/}
                            <div className="level-content">
                                <p>
                                    <strong>Enhanced Connection :</strong> Enjoy
                                    the poetic brilliance of "whispers of the
                                    Soul" and "Epilogues" to ignite your inner
                                    transformation.{" "}
                                </p>
                            </div>
                            {/*level-content*/}
                            <div className="level-content">
                                <h6>Act Now and Unlock the Star*Piece!</h6>
                                <p>
                                    Save 20% and enjoy a 7-Day Risk-Free Trial!
                                </p>
                            </div>
                            {/*level-content*/}
                        </div>{" "}
                        {/*carousel-caption*/}
                    </div>
                    {/*carousel-item*/}
                    <div className="carousel-item">
                        <div className="carousel-caption">
                            <h3 className="red-text-heading">
                                Level II - Community
                            </h3>
                            <h4>
                                Subscribe Today: Connect, Grow, and Ignite Your
                                Star* Potential!
                            </h4>
                            <h4>
                                Join our dynamic forum, dive into deep
                                discussions, and expand your insights. Your path
                                to becoming a Star* begins here-fully commit to
                                all levels to unlock you true potential.
                            </h4>
                            <div className="level-content">
                                <h5 className="red-text-heading">
                                    Why Join the Community?
                                </h5>
                                <p>
                                    <strong>Focused Discussions:</strong>{" "}
                                    Enhance your intellectual growth with our
                                    topic-driven community forum.{" "}
                                </p>
                            </div>
                            {/*level-content*/}
                            <div className="level-content">
                                <p>
                                    <strong>Maximized Insights:</strong>{" "}
                                    Optimize your experience with impactful
                                    contributions and meaningful exchanges.{" "}
                                </p>
                            </div>
                            {/*level-content*/}
                            <div className="level-content">
                                <p>
                                    <strong>Privacy Assured:</strong> Enjoy
                                    Secure interactions with profile ID and
                                    anonymous privacy protection.{" "}
                                </p>
                            </div>
                            {/*level-content*/}
                            <div className="level-content">
                                <p>
                                    <strong>Intellectual Trust:</strong> Forge
                                    valuable connections and gain transformative
                                    perspectives.{" "}
                                </p>
                            </div>
                            {/*level-content*/}
                            <div className="level-content">
                                <h6>Subscribe Now for Just $ 2/Month </h6>
                                <p>
                                    Save 30% on Our Combo Limited Offer! Plus,
                                    Experience a 7-Day Risk-Free Trial!
                                </p>
                            </div>
                            {/*level-content*/}
                        </div>{" "}
                        {/*carousel-caption*/}
                    </div>
                    {/*carousel-item*/}
                    <div className="carousel-item">
                        <div className="carousel-caption">
                            <h3 className="yellow-text-heading">
                                Level III - Talk to Star*
                            </h3>
                            <h4>
                                The Challenge Within-Unlock Your Star* Piece to
                                Advance and Illuminate Your Path!
                            </h4>
                            <div className="level-content">
                                <p>
                                    Play the game by matching principles and
                                    tackling true/false questions to gain access
                                    to exclusive "Talk to Star*" sessions. Dive
                                    in, break through barriers, and achieve new
                                    levels of enlightment and
                                    self-transcendence.
                                </p>
                            </div>
                            {/*level-content*/}
                            <div className="level-content">
                                <h5 className="yellow-text-heading">
                                    Benifits!
                                </h5>
                                <p>
                                    <strong>Interactive Game :</strong> Match
                                    principles and answer questions to advance.{" "}
                                </p>
                            </div>
                            {/*level-content*/}
                            <div className="level-content">
                                <p>
                                    <strong>Inspiring Talks:</strong> Choose
                                    topics that resonate with your journey.{" "}
                                </p>
                            </div>
                            {/*level-content*/}
                            <div className="level-content">
                                <p>
                                    <strong>Easy Access:</strong> Secure your
                                    spot as a participant or audience member.
                                </p>
                            </div>
                            {/*level-content*/}
                            <div className="level-content">
                                <p>
                                    <strong>Deep Insights:</strong> Gain wisdom
                                    on fear, ego, desire, and power.
                                </p>
                            </div>
                            {/*level-content*/}
                            <div className="level-content">
                                <h6>
                                    Power a Star*-Awaken Your Self-Transcedence
                                    and Radiance Before Time Runs Out!{" "}
                                </h6>
                            </div>
                            {/*level-content*/}
                        </div>{" "}
                        {/*carousel-caption*/}
                    </div>
                    {/*carousel-item*/}
                </div>
                {/*carousel-inner*/}
                {/* Left and right controls/icons */}
                {/*button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
<span class="carousel-control-prev-icon"></span>
</button>
<button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
<span class="carousel-control-next-icon"></span>
</button*/}
            </div>
            {/*carousel slide*/}
        </section>
    );
};

export default Home;
