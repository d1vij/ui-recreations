<script lang="ts" module>
    import { AccordionState } from "./AccordionState.svelte";
    export const OuterAccordionState = new AccordionState();
    export const InnerAccordionState = new AccordionState();
</script>

<script lang="ts">
    import Accordion from "./Accordion.svelte";
</script>

<div class="w-full space-y-4 bg-neutral-100 p-4 md:p-10">
    <Accordion
        background="oklch(83.7% 0.128 66.29)"
        title="Ordering and Payment"
        content={[
            {
                title: "How do I place an order?",
                content:
                    "You can place an order by browsing our product offerings and selecting the items you wish to purchase. Once you have selected all the items, you can proceed to checkout, where you will enter your shipping and payment information to complete the order.",
            },
            {
                title: "What payment methods do you accept?",
                content:
                    "We accept a wide range of payment methods, including credit and debit cards, PayPal, and bank transfers.",
            },
            {
                title: "How do I change or update my order?",
                content:
                    "If you need to change or update your order, please contact our customer service team as soon as possible. They will assist you with any necessary changes.",
            },
            {
                title: "How do I cancel an order?",
                content:
                    "To cancel an order, please contact our customer service team as soon as possible. They will assist you with cancelling the order and processing a refund, if applicable.",
            },
        ]}
    />

    <Accordion
        background="oklch(80.8% 0.114 19.571)"
        title="Shipping and Delivery"
        content={[
            {
                title: "How long does shipping take?",
                content:
                    "Shipping time will depend on the shipping method you choose and your location. We offer a range of shipping options, from standard to expedited, to suit your needs.",
            },
            {
                title: "Can I track my order?",
                content:
                    "Yes, you will receive a tracking number once your order has been shipped, and you can track the status of your delivery online.",
            },
            {
                title: "Do you offer free shipping?",
                content:
                    "We may offer free shipping promotions from time to time. Please check our shipping information page for the latest information on shipping and delivery.",
            },
            {
                title: "Do you ship internationally?",
                content:
                    "Yes, we ship to many countries around the world. You can check our shipping information page for a complete list of countries we currently serve.",
            },
        ]}
    />

    <Accordion
        background="oklch(80.9% 0.105 251.813)"
        title="Returns and Exchanges"
        content={[
            {
                title: "How do I return or exchange an item?",
                content:
                    "To return or exchange an item, please contact our customer service team for assistance. We have a detailed return policy that you can find on our website.",
            },
            {
                title: "What is your return policy?",
                content:
                    "Our return policy is designed to provide a simple and convenient return process for our customers. We accept returns for most products within a certain time frame, provided the item is in its original condition. For more details, please see our return policy on our website.",
            },
        ]}
    />

    <Accordion
        background="oklch(92.5% 0.084 155.995)"
        title="Customer Support"
        content={[
            {
                title: "How do I get assistance with an order or a product?",
                content:
                    "If you need assistance with an order or a product, please reach out to our customer service team. You can contact us via email at support@ecomstore.com or by phone at +1 (555) 555-5555.",
            },
            {
                title: "What are your business hours for customer support?",
                content:
                    "Our business hours for customer support are Monday-Friday from 9:00am to 5:00pm EST.",
            },
            {
                title: "How do I reach customer support if I have an issue with my order?",
                content:
                    "If you have an issue with your order, please reach out to our customer service team. You can contact us via email at support@ecomstore.com or by phone at +1 (555) 555-5555.",
            },
        ]}
    />

    <Accordion
        background="oklch(82.7% 0.119 306.383)"
        title="Site Security and Privacy"
        content={[
            {
                title: "Is shopping on your site secure?",
                content:
                    "Yes, shopping on our site is secure. We use the latest in encryption technology and security protocols to protect your personal and financial information.",
            },
            {
                title: "How do I know if my personal information is protected?",
                content:
                    "We take the protection of your personal information very seriously, and we have strict privacy policies in place to ensure your information is secure.",
            },
        ]}
    />

    <Accordion
        background="oklch(82.3% 0.12 346.018)"
        title="Account Management"
        content={[
            {
                title: "How do I create an account?",
                content:
                    'To create an account, simply click the "Create Account" button on our website and follow the prompts to enter your information.',
            },
            {
                title: "How do I update my account information?",
                content:
                    'To update your account information, simply log in to your account and click the "My Account" button.',
            },
            {
                title: "How do I reset my password?",
                content:
                    'To reset your password, click the "Forgot Password" link on the log in page.',
            },
        ]}
    />
</div>
