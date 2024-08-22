const PersonalDetails = () => {
    const details={
        name:'Saisha Reddy',
        gender:'Female',
        email:'saisha_reddy@gmail.com',
        phone:'1234567890',
        dob:'01/01/2000',
        address:'901,Coral Springs',
        city:'Palghar',
        state:'Maharashtra',
        zip:'401404',
        country:'India',
        pan:'ABCDE1234F',
        aadhar:'1234 5678 9012',
    }
    return ( 
        <div className="personal-details ">
            <table className="border-separate border-spacing-y-[10px] border-spacing-x-[2px] w-[50dvw]">
                <tr>
                    <th colSpan={2} className="pb-3 text-xl font-normal"> Personal Details</th>
                </tr>

            {
                Object.keys(details).map((key,index) => (
                    <tr className="bg-green-100  border-solid border-green-950 hover:bg-green-300 "key={index}>
                        <td className="px-5 py-2 border-r-0 rounded-tl-md rounded-bl-md">{key}</td>
                        <td className="px-5 border-l-0 rounded-tr-md rounded-br-md">{details[key]}</td>
                    </tr>
                ))
            }
            </table>
            
           
        </div>
     );
}
 
export default PersonalDetails;