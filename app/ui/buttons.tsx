export default function Button() {
    return (
        <div className="flex justify-normal absolute top-5 end-5 gap-2">
            <button className="bg-[#007BFF] text-[#F8F9FA] p-2 rounded-md hover:bg-[#0056b3]">Register</button>
            <button className="bg-[#007BFF] text-[#F8F9FA] p-2 rounded-md hover:bg-[#0056b3]">Log In</button>
        </div>
    );
}