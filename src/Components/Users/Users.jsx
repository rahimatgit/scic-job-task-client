

const Users = () => {

    const professions = [
        "Software Developer",
        "Graphic Designer",
        "Project Manager",
        "Marketing Specialist",
        "Data Analyst",
        "Financial Analyst",
        "UX/UI Designer",
        "Product Manager",
        "Content Writer",
        "Architect",
        "Medical Doctor",
        "Teacher/Educator",
        "Legal Consultant",
        "Research Scientist",
        "Civil Engineer",
        "Digital Marketer",
        "Event Planner",
    ];


    return (
        <div className="my-12">
            <h2 className="text-3xl md:text-6xl font-bold text-center">Who Uses TaskWise?</h2>
            <div className="grid grid-cols-5 gap-4">
            {professions.map((profession, idx) => <div 
            key={idx} 
            className="mt-8"
            >
                <div className="stack">
                    <div className="text-center shadow-md w-40 card bg-green-300">
                        <div className="card-body">{profession}</div>
                    </div>
                    
                </div>
            </div>)}
            </div>
        </div>
    );
};

export default Users;