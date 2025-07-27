import React, { useState } from 'react';
import { FaCar, FaHome, FaMoneyBill, FaGraduationCap, FaUser, FaBuilding, FaUsers, FaChild, FaCheckCircle, FaHistory, FaBan } from 'react-icons/fa';
import { RiseLoader } from 'react-spinners';

function Form({ onSubmit }) {
  const [formData, setFormData] = useState({
    ownCar: '',
    ownRealEstate: '',
    annualIncome: '',
    education: '',
    gender: '',
    incomeType: '',
    housingType: '',
    age: '',
    empYears: '',
    familyMembers: '',
    children: '',
    paidOff: '',
    pastDues: '',
    noLoan: '',
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const encodeEducation = (value) => {
    switch (value.toLowerCase()) {
      case 'graduate': return 1;
      case 'post graduate': return 2;
      case 'secondary': return 3;
      default: return 0;
    }
  };

  const encodeIncomeType = (value) => {
    switch (value.toLowerCase()) {
      case 'working': return 1;
      case 'commercial associate': return 2;
      case 'pensioner': return 3;
      case 'state servant': return 4;
      default: return 0;
    }
  };

  const encodeHousingType = (value) => {
    switch (value.toLowerCase()) {
      case 'house / apartment': return 1;
      case 'with parents': return 2;
      case 'municipal apartment': return 3;
      case 'rented apartment': return 4;
      case 'office apartment': return 5;
      default: return 0;
    }
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);

  const payload = {
    CODE_GENDER: formData.gender === 'Male' ? 1 : 0,
    Car_Owner: formData.ownCar === 'Yes' ? 1 : 0,
    Propert_Owner: formData.ownRealEstate === 'Yes' ? 1 : 0,
    CNT_CHILDREN: parseInt(formData.children),
    Annual_income: parseFloat(formData.annualIncome),
    NAME_INCOME_TYPE: encodeIncomeType(formData.incomeType),
    EDUCATION: encodeEducation(formData.education),
    NAME_HOUSING_TYPE: encodeHousingType(formData.housingType),
    AGE_YEARS: parseFloat(formData.age),
    EMP_YEARS: parseFloat(formData.empYears),
    CNT_FAM_MEMBERS: parseInt(formData.familyMembers),
    paid_off: parseInt(formData.paidOff),
    past_dues: parseInt(formData.pastDues),
    no_loan: parseInt(formData.noLoan)
  };

  console.log("📤 Sending Payload:", payload);

  try {
    const res = await fetch('http://127.0.0.1:5000/predict', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    console.log("📥 Response Status:", res.status);

    const data = await res.json();
    console.log("📣 Response Body:", data);

    setTimeout(() => {
      setLoading(false);
      if (data && data.approval) {
        onSubmit({ prediction: data.approval });
      } else {
        console.error("⚠️ Unexpected Response:", data);
      }
    }, 2500);
  } catch (err) {
    setLoading(false);
    console.error('❌ Prediction failed:', err);
  }
};


  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center h-40">
          <RiseLoader color="#3b82f6" size={15} />
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="bg-gray-900 bg-opacity-60 backdrop-blur-md p-6 rounded-2xl shadow-2xl border border-blue-500"
        >
          <h2 className="text-xl text-blue-400 font-bold mb-6 text-center">
            Enter Your Details
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative">
              <FaUser className="absolute top-4 left-3 text-blue-400" />
              <select name="gender" value={formData.gender} onChange={handleChange} className="pl-10 w-full bg-gray-800 text-white border border-blue-500 rounded-lg py-2" required>
                <option value="">Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>

            <div className="relative">
              <FaCar className="absolute top-4 left-3 text-blue-400" />
              <select name="ownCar" value={formData.ownCar} onChange={handleChange} className="pl-10 w-full bg-gray-800 text-white border border-blue-500 rounded-lg py-2" required>
                <option value="">Own Car?</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>

            <div className="relative">
              <FaHome className="absolute top-4 left-3 text-blue-400" />
              <select name="ownRealEstate" value={formData.ownRealEstate} onChange={handleChange} className="pl-10 w-full bg-gray-800 text-white border border-blue-500 rounded-lg py-2" required>
                <option value="">Own Real Estate?</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>

            <div className="relative">
              <FaMoneyBill className="absolute top-4 left-3 text-blue-400" />
              <input type="number" name="annualIncome" value={formData.annualIncome} onChange={handleChange} placeholder="Total Annual Income" className="pl-10 w-full bg-gray-800 text-white border border-blue-500 rounded-lg py-2" required />
            </div>

            <div className="relative">
              <FaGraduationCap className="absolute top-4 left-3 text-blue-400" />
              <select name="education" value={formData.education} onChange={handleChange} className="pl-10 w-full bg-gray-800 text-white border border-blue-500 rounded-lg py-2" required>
                <option value="">Education</option>
                <option value="Graduate">Graduate</option>
                <option value="Post Graduate">Post Graduate</option>
                <option value="Secondary">Secondary</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="relative">
              <FaBuilding className="absolute top-4 left-3 text-blue-400" />
              <select name="incomeType" value={formData.incomeType} onChange={handleChange} className="pl-10 w-full bg-gray-800 text-white border border-blue-500 rounded-lg py-2" required>
                <option value="">Income Type</option>
                <option value="Working">Working</option>
                <option value="Commercial associate">Commercial associate</option>
                <option value="Pensioner">Pensioner</option>
                <option value="State servant">State servant</option>
              </select>
            </div>

            <div className="relative">
              <FaHome className="absolute top-4 left-3 text-blue-400" />
              <select name="housingType" value={formData.housingType} onChange={handleChange} className="pl-10 w-full bg-gray-800 text-white border border-blue-500 rounded-lg py-2" required>
                <option value="">Housing Type</option>
                <option value="House / apartment">House / apartment</option>
                <option value="With parents">With parents</option>
                <option value="Municipal apartment">Municipal apartment</option>
                <option value="Rented apartment">Rented apartment</option>
                <option value="Office apartment">Office apartment</option>
              </select>
            </div>

            <div className="relative">
              <FaUser className="absolute top-4 left-3 text-blue-400" />
              <input type="number" name="age" value={formData.age} onChange={handleChange} placeholder="Age (Years)" className="pl-10 w-full bg-gray-800 text-white border border-blue-500 rounded-lg py-2" required />
            </div>

            <div className="relative">
              <FaUser className="absolute top-4 left-3 text-blue-400" />
              <input type="number" name="empYears" value={formData.empYears} onChange={handleChange} placeholder="Employment Length (Years)" className="pl-10 w-full bg-gray-800 text-white border border-blue-500 rounded-lg py-2" required />
            </div>

            <div className="relative">
              <FaUsers className="absolute top-4 left-3 text-blue-400" />
              <input type="number" name="familyMembers" value={formData.familyMembers} onChange={handleChange} placeholder="No. of Family Members" className="pl-10 w-full bg-gray-800 text-white border border-blue-500 rounded-lg py-2" required />
            </div>

            <div className="relative">
              <FaChild className="absolute top-4 left-3 text-blue-400" />
              <input type="number" name="children" value={formData.children} onChange={handleChange} placeholder="No. of Children" className="pl-10 w-full bg-gray-800 text-white border border-blue-500 rounded-lg py-2" required />
            </div>

            <div className="relative">
              <FaCheckCircle className="absolute top-4 left-3 text-blue-400" />
              <input type="number" name="paidOff" value={formData.paidOff} onChange={handleChange} placeholder="No. of Loans Paid Off" className="pl-10 w-full bg-gray-800 text-white border border-blue-500 rounded-lg py-2" required />
            </div>

            <div className="relative">
              <FaHistory className="absolute top-4 left-3 text-blue-400" />
              <input type="number" name="pastDues" value={formData.pastDues} onChange={handleChange} placeholder="No. of Past Dues" className="pl-10 w-full bg-gray-800 text-white border border-blue-500 rounded-lg py-2" required />
            </div>

            <div className="relative">
              <FaBan className="absolute top-4 left-3 text-blue-400" />
              <input type="number" name="noLoan" value={formData.noLoan} onChange={handleChange} placeholder="Current Active Loans" className="pl-10 w-full bg-gray-800 text-white border border-blue-500 rounded-lg py-2" required />
            </div>

          </div>

          <button type="submit" className="w-full mt-8 bg-gradient-to-r from-blue-500 to-cyan-500 hover:opacity-90 text-white font-bold py-3 rounded-xl transition duration-300 shadow-md">
            Predict
          </button>
        </form>
      )}
    </>
  );
}

export default Form;