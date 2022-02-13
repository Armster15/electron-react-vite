import React from 'react'

export const App: React.FC = ({}) => {
  return (
    <div className="flex min-h-screen">
      <div className="flex flex-1 justify-center items-center text-center">
        <div>
          <h1 className="font-bold text-2xl">Hello World!</h1>
          <p>You are running Node v{window.versions.node} and Chrome {window.versions.chrome}</p>
        </div>
      </div>
    </div>
  );
}