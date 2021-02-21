import './styles.scss';

/**
 * Simple link to scroll back to the top of the page (#top).
 *
 * Should be embedded in the footer for accessibility purposes.
 */
function BackToTop() {
    return (
        <a href="#top" className="back-to-top">
            <span className="sr-only">Return to the top of the page</span>
        </a>
    );
}

export default BackToTop;
