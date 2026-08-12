import React from 'react';
import { ModalContentData } from '../types';
import { SparkleDoodle } from './TropicalDoodles';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: ModalContentData | null;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, data }) => {
  if (!isOpen || !data) return null;

  return (
    <div
      className="modal fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-[#3D352E]/60 backdrop-blur-xs animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="modal-content bg-white w-full max-w-md sm:max-w-lg rounded-2xl border border-[#E2D8C7] jp-card-shadow relative max-h-[88vh] flex flex-col font-jp-body overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header section */}
        <div className="relative pt-4 px-5 pb-3 border-b border-[#E2D8C7] bg-[#FAF7F2] shrink-0">
          {/* Close Button */}
          <button
            type="button"
            onClick={onClose}
            className="close-button absolute top-3.5 right-3.5 bg-[#E07A5F] hover:bg-[#C06C53] text-white font-jp-rounded font-bold w-7 h-7 rounded-full flex items-center justify-center text-xs transition-transform active:scale-95 cursor-pointer shadow-xs z-10"
            aria-label="關閉"
          >
            ✕
          </button>

          {/* Modal Title */}
          <h3 className="text-base font-jp-title font-bold text-[#3D352E] pr-8 flex items-center gap-1.5 mt-1">
            <SparkleDoodle className="w-4 h-4 text-[#E07A5F] shrink-0" />
            <span>{data.title}</span>
          </h3>
        </div>

        {/* Modal Body (Scrollable) */}
        <div
          className="modal-body p-5 text-xs font-jp-body text-[#3D352E] leading-relaxed space-y-2 overflow-y-auto max-h-[calc(88vh-80px)] [&_h4]:font-jp-title [&_h4]:font-bold [&_h4]:text-[#3D352E] [&_h4]:text-sm [&_h4]:mt-3 [&_p]:my-1.5 [&_ul]:list-disc [&_ul]:pl-4 [&_li]:my-1 [&_strong]:text-[#E07A5F]"
          dangerouslySetInnerHTML={{ __html: data.contentHtml }}
        />
      </div>
    </div>
  );
};
