// import React from 'react'

// function AllergyAdvice() {
//   return (
//     <div>
//       allergyAdvice
//     </div>
//   )
// }

// export default AllergyAdvice


import React from 'react'

function AllergyAdvice() {
  return (
    <div>
      <div className="mt-10 mb-10">
          <div className="flex items-center justify-between mt-10">
            
            <div className="md:w-1/2 text-center md:text-left ml-16">
              <h2 className="text-teal-600 text-5xl mb-8 font-semibold">Allergy Advice</h2>
              <p className="text-gray-600 text-sm mt-2">
                AT OUR RESTAURANT
              </p>
              <p className=" text-3xl font-bold mt-4">
                We use only the freshest and highest quality ingredients in all our dishes, 
      
              </p>
              <p className="text-orange-600 font-bold text-3xl mt-2">
                and offer transparency in our ingredient labeling.
              </p>
            </div>
      
            
            <div className="w-1/2 flex justify-center mt-6 relative">
              <div className="">
                <div className=""></div>
                <img
                  // src={cook1}
                  alt="Chef"
                  className="w-[400px]"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white text-gray-800 py-10 px-4 relative overflow-hidden">
              <h2 className="text-center text-2xl font-semibold text-orange-600 mb-6">
                Ingredient’s Used
              </h2>
        
              
              <div className="absolute inset-0 flex flex-col justify-between items-center z-0 pointer-events-none">
                <div
                  className=" h-40 w-full bg-no-repeat bg-left ml-[600px] bg-contain"
                  // style={{ backgroundImage: url(${top1}) }}
                />
                <div
                  className="h-[800px] w-[1400px] bg-no-repeat bg-center bg-cover"
                  // style={{ backgroundImage: url(${top2}) }}
                />
                <div
                  className="h-40 w-full bg-no-repeat bg-right mr-[600px] bg-contain"
                  // style={{ backgroundImage: url(${top3}) }}
                />
              </div>
        
              
              <div className="grid grid-cols-1 gap-8 max-w-3xl mx-auto  relative z-10">
                <div className="border border-teal-600 rounded-xl p-4 shadow-md bg-white">
                  <h3 className="text-lg font-semibold  mb-4">For the Dough</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>1/2 cups refined flour</li>
                    <li>1/4 tsp baking powder</li>
                    <li>1/2 tsp salt</li>
                    <li>1/2 cup salt water (for kneading)</li>
                  </ul>
                </div>
        
                <div className="border border-teal-600 rounded-xl p-4 shadow-md bg-white">
                  <h3 className="text-lg font-semibold  mb-4">For the Chicken Filling:</h3>
                  <ul className="list-disc pl-6 space-y-2 ">
                    <li>1 cup chicken (minced)</li>
                    <li>1/2 cup onions, finely chopped</li>
                    <li>1/2 tsp black pepper powder</li>
                    <li>1/2 tsp ginger</li>
                    <li>1/2 tsp garlic paste</li>
                    <li>1/2 tsp soya sauce</li>
                    <li>Salt</li>
                    <li>1/4 tsp vinegar</li>
                  </ul>
                </div>
        
                <div className="border border-teal-600 rounded-xl p-4 shadow-md bg-white">
                  <h3 className="text-lg font-semibold  mb-4">For the Vegetarian Filling:</h3>
                  <ul className="list-disc pl-6 space-y-2 ">
                    <li>1 cup cabbage and carrots, grated</li>
                    <li>2 tbsp onions, finely chopped</li>
                    <li>1/2 tsp garlic, finely chopped</li>
                    <li>1 tbsp oil</li>
                    <li>1/4 tsp vinegar</li>
                    <li>1/2 tsp soya sauce</li>
                    <li>To taste salt</li>
                    <li>To taste pepper</li>
                    <li>1 tbsp cornflour</li>
                  </ul>
                </div>
        
                <div className="border border-teal-600 rounded-xl p-4 shadow-md bg-white">
                  <h3 className="text-lg font-semibold  mb-4">For Chilli Sauce:</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>25 grams garlic, peeled</li>
                    <li>6 gms whole red chillies</li>
                    <li>3 tbsp vinegar</li>
                    <li>3 tbsp water</li>
                    <li>1 tbsp oil</li>
                    <li>To taste salt</li>
                    <li>To taste pepper</li>
                    <li>To taste sugar</li>
                  </ul>
                </div>
              </div>
            </div>
    </div>
  )
}

export default AllergyAdvice
