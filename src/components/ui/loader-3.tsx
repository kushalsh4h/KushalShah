"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";

export const Component = () => {
  return (
    <div className="loader">
      <div className="box box0" style={{ '--x': '40px', '--y': '0px' }}>
        <div></div>
      </div>
      <div className="box box1" style={{ '--x': '28px', '--y': '28px' }}>
        <div></div>
      </div>
      <div className="box box2" style={{ '--x': '0px', '--y': '40px' }}>
        <div></div>
      </div>
      <div className="box box3" style={{ '--x': '-28px', '--y': '28px' }}>
        <div></div>
      </div>
      <div className="box box4" style={{ '--x': '-40px', '--y': '0px' }}>
        <div></div>
      </div>
      <div className="box box5" style={{ '--x': '-28px', '--y': '-28px' }}>
        <div></div>
      </div>
      <div className="box box6" style={{ '--x': '0px', '--y': '-40px' }}>
        <div></div>
      </div>
      <div className="box box7" style={{ '--x': '28px', '--y': '-28px' }}>
        <div></div>
      </div>
      <div className="ground">
        <div></div>
      </div>
    </div>
  );
};