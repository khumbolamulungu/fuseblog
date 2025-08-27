export default function Footer(){
    return (
      <footer className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4 bg-gray-100 rounded-lg">
        <aside className="max-w-7xl mx-autoo items-center grid-flow-col">
            <p>Copyright © {new Date().getFullYear()} - All rights reserved, Website developed by Khumbo Klein Chilamwa</p>
        </aside>
      </footer>
    );
}