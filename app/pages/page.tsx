"use client";
import React, { useState, useEffect } from "react";

import { pocketbase } from "../lib/pocketbase";
import { RecordModel } from "pocketbase";
import Card from "../components/Card/Card";
import Link from "next/link";

export const HomePage: React.FC = () => {
  const { getPosts } = pocketbase();
  const [items, setItems] = useState<RecordModel[]>([]);
  const [error, setError] = useState<string | null>(null); 

  useEffect(() => {
    const loadData = async () => {
      try {
        const result = await getPosts();
        setItems(result);
        console.log(result);
      } catch (error) {
        setError("Error"); 
      }
    };

    loadData();
  }, []);

  return (
    <div>
      <main className="bg-ADC4CE p-4 flex flex-col justify-center items-center bg-cover bg-center min-h-screen">
        <h1 className="text-3xl font-semibold text-center mx-auto">
          Welcome to main page
        </h1>

        {error ? "Error" : ''}

        <div className="grid mt-[100px] grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 bg-EEE0C9 p-4">
          {items.map(({ id, title, shortdes, date, fulldesc, url }) => (
            <React.Fragment key={id}>
              <Card
                fulldesc={fulldesc}
                url={url}
                title={title}
                shortdes={shortdes}
                date={date}
              >
                <Link href={`/posts/${id}`} as={`/posts/${id}`} className="mt-4" title={title}>
                  Visit
                </Link>
              </Card>
            </React.Fragment>
          ))}
        </div>
      </main>
    </div>
  );
};

export default HomePage;
