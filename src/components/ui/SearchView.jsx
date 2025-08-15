import React from 'react';
import PropTypes from 'prop-types';

const SearchView = ({ 
  placeholder = "Search", 
  leftImage, 
  rightImage, 
  value = "", 
  onChange, 
  onSubmit,
  className = "",
  ...props 
}) => {
  const handleSubmit = (e) => {
    e?.preventDefault();
    if (onSubmit) {
      onSubmit(value);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={`flex items-center gap-[10px] ${className}`} {...props}>
      {leftImage && (
        <img 
          src={leftImage?.src} 
          alt="search icon" 
          className={`w-[${leftImage?.width}px] h-[${leftImage?.height}px]`}
        />
      )}
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange && onChange(e?.target?.value)}
        className="bg-transparent border-none outline-none text-searchview-1 placeholder-searchview-1 flex-1 text-sm font-normal leading-[21px] font-poppins"
      />
      {rightImage && (
        <img 
          src={rightImage?.src} 
          alt="icon" 
          className={`w-[${rightImage?.width}px] h-[${rightImage?.height}px]`}
        />
      )}
    </form>
  );
};

SearchView.propTypes = {
  placeholder: PropTypes?.string,
  leftImage: PropTypes?.shape({
    src: PropTypes?.string?.isRequired,
    width: PropTypes?.number,
    height: PropTypes?.number
  }),
  rightImage: PropTypes?.shape({
    src: PropTypes?.string?.isRequired,
    width: PropTypes?.number,
    height: PropTypes?.number
  }),
  value: PropTypes?.string,
  onChange: PropTypes?.func,
  onSubmit: PropTypes?.func,
  className: PropTypes?.string
};

export default SearchView;