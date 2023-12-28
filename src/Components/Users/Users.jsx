

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
        "Teacher",
        "Legal Consultant",
        "Research Scientist",
        "Event Planner",
    ];


    return (
        <div className="my-12">
            <h2 className="text-3xl md:text-6xl font-bold text-center">Who Uses TaskWise?</h2>
            <div className="grid grid-cols-3 md:grid-cols-5 gap-4">
            {professions.map((profession, idx) => <div 
            key={idx} 
            className="mt-8 bg-base-200 px-4 py-2 md:px-10 md:py-8 text-center rounded-lg text-lg md:text-xl font-bold"
            >
                {profession}
            </div>)}
            </div>
        </div>
    );
};

export default Users;