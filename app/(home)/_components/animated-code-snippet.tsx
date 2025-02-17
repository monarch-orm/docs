"use client";

import React, { useState, useEffect } from 'react';

const codeSnippets = [
  {
    title: "Basic Schema",
    code: `
// Define your schema
const UserSchema = createSchema("users", {
  name: string(),
  email: string(),
  age: number(),
});

const { collections } = createDatabase(client, {
  users: UserSchema,
});

// Use it with full type safety
const newUser = await collections.users.insert({
  name: 'John Doe',
  email: 'john@example.com',
  age: 25,
});

// Enjoy autocompletion and type checking
console.log(newUser.name); // John Doe
    `.trim()
  },
  {
    title: "Advanced Query",
    code: `
// Perform complex queries with type safety
const result = await collections.users.find({
  age: { $gte: 18, $lte: 65 },
  'address.city': 'New York'
})
.sort({ lastName: 1, firstName: 1 })
.limit(10);

// Type-safe access to results
result.forEach(user => {
  console.log(\`\${user.name} (\${user.age})\`);
});
    `.trim()
  },
  {
    title: "Relationships",
    code: `
// Define related schemas
const Post = monarch.schema('Post', {
  title: { type: String, required: true },
  content: { type: String },
  author: { type: monarch.Types.ObjectId, ref: 'User' },
});

// Create a post with a related user
const post = await Post.create({
  title: 'My First Post',
  content: 'Hello, Monarch!',
  author: newUser._id,
});

// Populate the author in a query
const populatedPost = await Post.findById(post._id)
  .populate('author')
  .exec();

console.log(populatedPost.author.name); // John Doe
    `.trim()
  }
];

const AnimatedCodeSnippet: React.FC = () => {
  const [displayedCode, setDisplayedCode] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [currentSnippetIndex, setCurrentSnippetIndex] = useState(0);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    let currentIndex = 0;
    const currentSnippet = codeSnippets[currentSnippetIndex].code;

    const typeCode = () => {
      if (currentIndex < currentSnippet.length) {
        setDisplayedCode((prev) => prev + currentSnippet[currentIndex]);
        currentIndex++;
        timer = setTimeout(typeCode, 5); // Increased typing speed
      } else {
        setIsTyping(false);
        timer = setTimeout(eraseCode, 1000); // Reduced pause before erasing
      }
    };

    const eraseCode = () => {
      if (currentIndex > 0) {
        setDisplayedCode((prev) => prev.slice(0, -1));
        currentIndex--;
        timer = setTimeout(eraseCode, 3); // Increased erasing speed
      } else {
        setIsTyping(true);
        setCurrentSnippetIndex((prevIndex) => (prevIndex + 1) % codeSnippets.length);
        timer = setTimeout(typeCode, 300); // Reduced pause before typing next snippet
      }
    };

    if (isTyping) {
      timer = setTimeout(typeCode, 300);
    }

    return () => clearTimeout(timer);
  }, [isTyping, currentSnippetIndex]);

  return (
    <div className="flex">
      <pre className="text-primary flex-grow relative">
        <code>{displayedCode}</code>
        <span className="absolute bottom-0 right-0 w-2 h-5 bg-primary animate-pulse"></span>
      </pre>
      <ul className="ml-4 space-y-2">
        {codeSnippets.map((snippet, index) => (
          <li
            key={index}
            className={`text-sm ${index === currentSnippetIndex ? 'text-primary font-bold' : 'text-muted-foreground'}`}
          >
            {snippet.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AnimatedCodeSnippet;