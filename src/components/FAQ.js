import React from 'react';

function FAQ() {
    return (
        <section className="w-full px-6 py-0 pb-20 font-roboto flex flex-col items-center">
            <div className="max-w-4xl bg-[#e4e5e5] border-2 border-black rounded-2xl shadow-xl p-6 md:p-8 text-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">Important Note</h2>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                    To ensure the integrity of encrypted images, always share them as <strong>documents</strong> on platforms like WhatsApp or Telegram. These platforms may compress media shared as photos or videos, potentially leading to data loss and making decryption impossible.
                </p>
            </div>
        </section>
    );
}

export default FAQ;
