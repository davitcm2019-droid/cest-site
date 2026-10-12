type FAQItem = { question: string; answer: string };
export function FAQSection({ items }: { items: FAQItem[] }) {
  return (
    <div className="faq-list">
      {items.map((item, index) => (
        <details
          key={item.question}
          className="faq-item"
          name="cest-faq"
          open={index === 0}
        >
          <summary>
            <span className="faq-number">0{index + 1}</span>
            <span>{item.question}</span>
            <span className="faq-plus" aria-hidden="true">
              +
            </span>
          </summary>
          <p>{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
