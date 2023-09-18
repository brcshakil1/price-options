
import PriceOption from './../PriceOption/PriceOption';
const PriceOptions = () => {
    
    const priceOptions = [
          {
            "id": "1",
            "name": "Basic Membership",
            "features": [
              "Access to cardio and weightlifting areas",
              "Locker room access",
              "Fitness assessment",
              "24/7 gym access",
              "Monthly fitness classes"
            ],
            "price": "$29.99/month"
          },
          {
            "id": "2",
            "name": "Premium Membership",
            "features": [
              "Access to all gym facilities, including pool and sauna",
              "Personal trainer sessions (2x per month)",
              "Nutritional guidance",
              "Monthly fitness classes",
              "Towel service"
            ],
            "price": "$59.99/month"
          },
          {
            "id": "3",
            "name": "Student Membership",
            "features": [
              "Access to cardio and weightlifting areas",
              "Locker room access",
              "Student ID required",
              "Limited to 10 hours per week",
              "Monthly fitness classes"
            ],
            "price": "$19.99/month"
          },
          {
            "id": "4",
            "name": "Family Membership",
            "features": [
              "Access for two adults and up to two children",
              "Access to all gym facilities",
              "Family fitness classes",
              "Childcare services",
              "Monthly fitness classes"
            ],
            "price": "$89.99/month"
          }
        ];
      
      
    return (
        <div>
            <h2 className="text-5xl">Best prices in the town</h2> 
            <div className="grid grid-cols-3 gap-6 p-10">
            {
              priceOptions.map(option => <PriceOption key={option.id} option={option}/>)
            }
            </div>
        </div>
    );
};

export default PriceOptions;