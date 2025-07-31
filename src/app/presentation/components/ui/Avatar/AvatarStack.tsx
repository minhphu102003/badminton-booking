import React from 'react';
import './AvatarStack.scss';

type AvatarStackProps = {
  avatarUrls: string[];
  maxVisible?: number;
  size?: number;
};

const AvatarStack: React.FC<AvatarStackProps> = ({ avatarUrls, maxVisible = 6, size = 40 }) => {
  const displayCount = avatarUrls.length > maxVisible ? maxVisible - 1 : avatarUrls.length;
  const extraCount = avatarUrls.length - displayCount;
  const visibleAvatars = avatarUrls.slice(0, displayCount);

  return (
    <div className="avatar-stack">
      {visibleAvatars.map((url, index) => (
        <div
          key={index}
          className="avatar"
          style={{
            width: size,
            height: size,
            backgroundImage: `url(${url})`,
          }}
        />
      ))}

      {extraCount > 0 && (
        <div className="avatar avatar-overflow" style={{ width: size, height: size }}>
          +{extraCount}
        </div>
      )}
    </div>
  );
};

export default AvatarStack;
