"use client"
import { useState } from 'react';
import Head from 'next/head';

export default function AuthorizationForm1() {
  const [page, setPage] = useState(1);

  const nextPage = () => setPage(page + 1);
  const prevPage = () => setPage(page - 1);

  const progressPercentage = page === 1 ? 50 : 100;

  return (
    <>
      <Head>
        <title>Authorization to Store Personal Data Outside Rwanda</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
      </Head>
      <section className="container mx-auto p-8 bg-gray-100 rounded-md shadow-md max-w-3xl">
        <header className="text-2xl font-bold mb-6 text-center text-dark">Authorization to Store Personal Data Outside Rwanda</header>
        {/* Progress Bar */}
        <div className="w-full bg-gray-200 rounded-full h-6 mb-6 relative">
          <div
            className={`h-6 rounded-full bg-blue-500 text-white text-xs font-medium text-center p-0.5 leading-none ${page === 1 ? 'w-1/2' : 'w-full'}`}
          >
            {progressPercentage}%
          </div>
        </div>
        <form action="#" className="form space-y-6">
          {page === 1 && (
            <>
              <div className="input">
                <label className="block mb-1 font-medium text-dark">Full Name:</label>
                <input type="text" placeholder="Enter full name" required className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div className="input-box">
                <label className="block mb-1 font-medium text-dark">Select If Applicable or Not Applicable:</label>
                <select required className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option hidden>Select an option</option>
                  <option>Applicable</option>
                  <option>Not Applicable</option>
                </select>
              </div>
              <div className="input-box">
                <label className="block mb-1 font-medium text-dark">Please select the appropriate type of sensitive personal data you store:</label>
                <select required className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option hidden>Select an option</option>
                  <option>Person’s race</option>
                  <option>Political opinion</option>
                  <option>Religious or philosophical beliefs</option>
                  <option>Social origin</option>
                  <option>Not Applicable</option>
                  <option>Health status</option>
                  <option>Sexual life or family details</option>
                  <option>Genetic or biometric information</option>
                  <option>Criminal records</option>
                  <option>Medical records</option>
                </select>
              </div>
              <button type="button" onClick={nextPage} className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">Next</button>
            </>
          )}
          {page === 2 && (
            <>
              <div className="input-box">
                <label className="block mb-1 font-medium text-dark">Name(s) of Hosting Service Provider(s)</label>
                <input type="text" placeholder="Who will store personal data on your behalf?" required className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <input type="text" placeholder="Service Provider Name 1" required className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <input type="text" placeholder="Service Provider Name 2" required className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div className="input-box">
                <label className="block mb-1 font-medium text-dark">Destination country(ies) for Primary storage</label>
                <input type="text" placeholder="Primary storage" required className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <input type="text" placeholder="Primary storage" required className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div className="input-box">
                <label className="block mb-1 font-medium text-dark">Destination country(ies) for Disaster Recovery (DR)</label>
                <input type="text" placeholder="Disaster Recovery (DR)" required className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <input type="text" placeholder="Disaster Recovery (DR)" required className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div className="input-box">
                <label className="block mb-1 font-medium text-dark">Type of Hosting Services:</label>
                <select required className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option hidden>Select an option</option>
                  <option>Shared Hosting</option>
                  <option>VPS hosting</option>
                  <option>Dedicated Server Hosting</option>
                  <option>Cloud Hosting</option>
                </select>
              </div>
              <div className="input-box">
                <label className="block mb-1 font-medium text-dark">Involvement of third party(ies)</label>
                <input type="text" placeholder="Name of third party(ies)" required className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <input type="text" placeholder="Name of third party(ies)" required className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div className="input-box">
                <label className="block mb-1 font-medium text-dark">Applicable Personal Data Protection and Privacy Laws</label>
                <textarea placeholder="What are the data protection laws of country(ies) the personal data will be stored to with respect to the country(ies) of destination?" required className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
              </div>
              <div className="input-box">
                <label className="block mb-1 font-medium text-dark">Your Position:</label>
                <input type="text" required className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div className="input-box">
                <label className="block mb-1 font-medium text-dark">Date:</label>
                <input type="date" required className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div className="input-box">
                <label className="block mb-1 font-medium text-dark">Details Of Protection For Personal Data To Store Outside of Rwanda</label>
                <textarea placeholder="What are technical and organizational measures put in place to protect personal data before being stored?" required className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
              </div>
              <div className="input-box">
                <label className="block mb-1 font-medium text-dark">Safeguards, security measures, and mechanisms implemented to protect personal data by hosting service provider(s)</label>
                <textarea placeholder="What are technical and organizational measures do the hosting service providers have in place to protect personal data?" required className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
              </div>
              <div className="input-box flex items-center">
                <input type="checkbox" id="terms" required className="mr-2" />
                <label htmlFor="terms" className="font-medium text-dark">I certify that the above information is correct and complete and hereby apply to be authorized to store personal data outside Rwanda under Law No 058/2021 of 13/10/2021 relating to the protection of personal data and privacy.</label>
              </div>
              <div className="flex justify-between">
                <button type="button" onClick={prevPage} className="px-4 py-2 bg-gray-300 text-dark rounded-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500">Previous</button>
                <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">Submit</button>
              </div>
            </>
          )}
        </form>
      </section>
    </>
  );
}
