import { useEffect, useState } from 'react'

const Typing = ({ words, typingSpeed = 100, deletingSpeed = 100, pause = 2000 }) => {
    const [text, setText] = useState("");
    const [wordIndex, setWordIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentWord = words[wordIndex];
        const isLastChar = text === currentWord;
        const isEmpty = text === "";

        let timeout;

        if (isDeleting) {
            timeout = setTimeout(() => {
                setText(currentWord.substring(0, text.length - 1));
            }, deletingSpeed);
        } else {
            timeout = setTimeout(() => {
                setText(currentWord.substring(0, text.length + 1));
            }, typingSpeed);
        }

        if (!isDeleting && isLastChar) {
            timeout = setTimeout(() => setIsDeleting(true), pause);
        } else if (isDeleting && isEmpty) {
            setIsDeleting(false);
            setWordIndex((prev) => (prev + 1) % words.length);
        }

        return () => clearTimeout(timeout);
    }, [text, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pause]);

    return <span>{text}</span>;
};

export default Typing