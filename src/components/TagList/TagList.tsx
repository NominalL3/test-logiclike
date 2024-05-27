import React from "react";
import "./TagList.scss";

interface TagListProps {
  tags: string[];
  selectedTag: string;
  onSelectTag: (tag: string) => void;
}

const TagList: React.FC<TagListProps> = ({
  tags,
  selectedTag,
  onSelectTag,
}) => {
  return (
    <div className="tag-list">
      {tags.map((tag) => (
        <button
          key={tag}
          className={`tag ${tag === selectedTag ? "selected" : ""}`}
          onClick={() => onSelectTag(tag)}
        >
          {tag}
        </button>
      ))}
    </div>
  );
};

export default TagList;
