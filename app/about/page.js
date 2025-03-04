export default function About() {
    return (
        <div className="text-foreground w-[85%] md:w-2/5 mt-4 text-center leading-relaxed p-5 flex flex-col items-center font-[family-name:var(--font-geist-mono)]">
            <p className="text-l font-bold ">Hi!</p>
            <p className="mt-5">
                I'm <b>Daniel Shin (신규승)</b>, a software engineer, boba aficonado, and aspiring entrepreneur. 
                I am currently a student at UC Berkeley, majoring in Electrical Engineering and Computer Sciences. 
                Right now, I am taking some gap years, working at <b>Everspin</b>, a cybersecurity firm back in my 
                home country, South Korea. My personal interests in computer science span <b>distributed systems</b>  
                and deep learning, specifically <b>agentic systems</b>.
            </p>
            <p className="mt-5 mb-30">
                In my free time, I try to exercise a lot, read books, and hang out with friends. I love travelling and camping, 
                and am trying to get into backpacking. I love meeting new people, so if you want to chat, contact me anytime!
            </p>
        </div>
    );
}