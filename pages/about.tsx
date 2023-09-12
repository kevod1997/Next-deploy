import { MainLayout } from "../components/layouts/MainLayout";
import { DarkLayout } from "../components/layouts/DarkLayout";
import React from "react";


export default function About() {
  return (
    <>
      <h1 className="title">About Page</h1>
    </>
  );
}

About.getLayout = function getLayout(page: React.JSX.Element) {
  return (
    <>
      <MainLayout>
        <DarkLayout>{page}</DarkLayout>
      </MainLayout>
    </>
  );
};
