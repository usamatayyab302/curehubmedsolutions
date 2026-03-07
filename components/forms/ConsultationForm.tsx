"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type ConsultationFormVariant = "homepage" | "contact";

type ConsultationFormProps = {
  variant?: ConsultationFormVariant;
  submitLabel?: string;
};

type SharedValues = {
  email: string;
  phone: string;
  specialty: string;
  message: string;
};

type HomepageValues = SharedValues & {
  fullName: string;
  clinicName: string;
  practiceSize: string;
  billingMethod: string;
};

type ContactValues = SharedValues & {
  firstName: string;
  lastName: string;
  practiceName: string;
  physicianCount: string;
  monthlyCollections: string;
  totalAccountsReceivable: string;
};

type FormErrors = Record<string, string>;

const homepageInitialValues: HomepageValues = {
  fullName: "",
  clinicName: "",
  email: "",
  phone: "",
  specialty: "",
  practiceSize: "",
  billingMethod: "",
  message: "",
};

const contactInitialValues: ContactValues = {
  firstName: "",
  lastName: "",
  practiceName: "",
  email: "",
  phone: "",
  specialty: "",
  physicianCount: "",
  monthlyCollections: "",
  totalAccountsReceivable: "",
  message: "",
};

export default function ConsultationForm({
  variant = "homepage",
  submitLabel,
}: ConsultationFormProps) {
  const [homepageValues, setHomepageValues] = useState<HomepageValues>(homepageInitialValues);
  const [contactValues, setContactValues] = useState<ContactValues>(contactInitialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const values = variant === "contact" ? contactValues : homepageValues;

  const onValueChange = (field: string, value: string) => {
    if (variant === "contact") {
      setContactValues((prev) => ({ ...prev, [field]: value }));
    } else {
      setHomepageValues((prev) => ({ ...prev, [field]: value }));
    }

    setErrors((prev) => {
      if (!prev[field]) return prev;
      const next = { ...prev };
      delete next[field];
      return next;
    });

    setSubmitted(false);
  };

  const validate = () => {
    const nextErrors: FormErrors = {};

    if (variant === "contact") {
      if (!contactValues.firstName.trim()) nextErrors.firstName = "First name is required.";
      if (!contactValues.lastName.trim()) nextErrors.lastName = "Last name is required.";
      if (!contactValues.practiceName.trim()) nextErrors.practiceName = "Practice name is required.";
      if (!contactValues.email.trim()) nextErrors.email = "Email is required.";
      if (!contactValues.phone.trim()) nextErrors.phone = "Phone number is required.";
      if (!contactValues.specialty.trim()) nextErrors.specialty = "Medical specialty is required.";
      if (!contactValues.physicianCount.trim()) nextErrors.physicianCount = "Number of physicians is required.";
      if (!contactValues.monthlyCollections.trim()) nextErrors.monthlyCollections = "Monthly collections are required.";
      if (!contactValues.totalAccountsReceivable.trim()) nextErrors.totalAccountsReceivable = "Total accounts receivable is required.";
      if (!contactValues.message.trim()) nextErrors.message = "Please add a short message.";
    } else {
      if (!homepageValues.fullName.trim()) nextErrors.fullName = "Full name is required.";
      if (!homepageValues.clinicName.trim()) nextErrors.clinicName = "Practice/Clinic name is required.";
      if (!homepageValues.email.trim()) nextErrors.email = "Email address is required.";
      if (!homepageValues.phone.trim()) nextErrors.phone = "Phone number is required.";
      if (!homepageValues.specialty.trim()) nextErrors.specialty = "Medical specialty is required.";
      if (!homepageValues.practiceSize.trim()) nextErrors.practiceSize = "Practice size is required.";
      if (!homepageValues.billingMethod.trim()) nextErrors.billingMethod = "Current billing method is required.";
      if (!homepageValues.message.trim()) nextErrors.message = "Please add a short message.";
    }

    if (values.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      nextErrors.email = "Enter a valid email address.";
    }

    return nextErrors;
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;

    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1100));
    setIsSubmitting(false);
    setSubmitted(true);

    if (variant === "contact") {
      setContactValues(contactInitialValues);
    } else {
      setHomepageValues(homepageInitialValues);
    }
  };

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-4">
      {variant === "contact" ? (
        <>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="firstName" className="mb-1 block text-xs font-semibold uppercase tracking-[0.08em] text-heading">
                First Name
              </label>
              <Input id="firstName" value={contactValues.firstName} onChange={(e) => onValueChange("firstName", e.target.value)} placeholder="John" aria-invalid={Boolean(errors.firstName)} />
              {errors.firstName && <p className="mt-1 text-xs text-red-600">{errors.firstName}</p>}
            </div>
            <div>
              <label htmlFor="lastName" className="mb-1 block text-xs font-semibold uppercase tracking-[0.08em] text-heading">
                Last Name
              </label>
              <Input id="lastName" value={contactValues.lastName} onChange={(e) => onValueChange("lastName", e.target.value)} placeholder="Smith" aria-invalid={Boolean(errors.lastName)} />
              {errors.lastName && <p className="mt-1 text-xs text-red-600">{errors.lastName}</p>}
            </div>
          </div>

          <div>
            <label htmlFor="practiceName" className="mb-1 block text-xs font-semibold uppercase tracking-[0.08em] text-heading">
              Practice Name
            </label>
            <Input id="practiceName" value={contactValues.practiceName} onChange={(e) => onValueChange("practiceName", e.target.value)} placeholder="Prime Care Clinic" aria-invalid={Boolean(errors.practiceName)} />
            {errors.practiceName && <p className="mt-1 text-xs text-red-600">{errors.practiceName}</p>}
          </div>
        </>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="fullName" className="mb-1 block text-xs font-semibold uppercase tracking-[0.08em] text-heading">
              Full Name
            </label>
            <Input id="fullName" value={homepageValues.fullName} onChange={(e) => onValueChange("fullName", e.target.value)} placeholder="Dr. John Smith" aria-invalid={Boolean(errors.fullName)} />
            {errors.fullName && <p className="mt-1 text-xs text-red-600">{errors.fullName}</p>}
          </div>
          <div>
            <label htmlFor="clinicName" className="mb-1 block text-xs font-semibold uppercase tracking-[0.08em] text-heading">
              Practice / Clinic Name
            </label>
            <Input id="clinicName" value={homepageValues.clinicName} onChange={(e) => onValueChange("clinicName", e.target.value)} placeholder="Prime Care Clinic" aria-invalid={Boolean(errors.clinicName)} />
            {errors.clinicName && <p className="mt-1 text-xs text-red-600">{errors.clinicName}</p>}
          </div>
        </div>
      )}

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className="mb-1 block text-xs font-semibold uppercase tracking-[0.08em] text-heading">
            Email Address
          </label>
          <Input id="email" type="email" value={values.email} onChange={(e) => onValueChange("email", e.target.value)} placeholder="you@clinic.com" aria-invalid={Boolean(errors.email)} />
          {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="phone" className="mb-1 block text-xs font-semibold uppercase tracking-[0.08em] text-heading">
            Phone Number
          </label>
          <Input id="phone" type="tel" value={values.phone} onChange={(e) => onValueChange("phone", e.target.value)} placeholder="+1 (555) 123-4567" aria-invalid={Boolean(errors.phone)} />
          {errors.phone && <p className="mt-1 text-xs text-red-600">{errors.phone}</p>}
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="specialty" className="mb-1 block text-xs font-semibold uppercase tracking-[0.08em] text-heading">
            Medical Specialty
          </label>
          <Input id="specialty" value={values.specialty} onChange={(e) => onValueChange("specialty", e.target.value)} placeholder="Family Practice" aria-invalid={Boolean(errors.specialty)} />
          {errors.specialty && <p className="mt-1 text-xs text-red-600">{errors.specialty}</p>}
        </div>

        {variant === "contact" ? (
          <div>
            <label htmlFor="physicianCount" className="mb-1 block text-xs font-semibold uppercase tracking-[0.08em] text-heading">
              Number of Physicians
            </label>
            <Input id="physicianCount" value={contactValues.physicianCount} onChange={(e) => onValueChange("physicianCount", e.target.value)} placeholder="5" aria-invalid={Boolean(errors.physicianCount)} />
            {errors.physicianCount && <p className="mt-1 text-xs text-red-600">{errors.physicianCount}</p>}
          </div>
        ) : (
          <div>
            <label htmlFor="practiceSize" className="mb-1 block text-xs font-semibold uppercase tracking-[0.08em] text-heading">
              Practice Size
            </label>
            <select
              id="practiceSize"
              value={homepageValues.practiceSize}
              onChange={(e) => onValueChange("practiceSize", e.target.value)}
              className="h-10 w-full rounded-xl border border-primary/20 bg-medical-white px-3 py-2 text-sm text-foreground outline-none transition-all focus-visible:border-primary/40 focus-visible:ring-2 focus-visible:ring-primary/20"
              aria-invalid={Boolean(errors.practiceSize)}
            >
              <option value="">Select Practice Size</option>
              <option value="Solo Practice">Solo Practice</option>
              <option value="2-5 Providers">2-5 Providers</option>
              <option value="6-10 Providers">6-10 Providers</option>
              <option value="10+ Providers">10+ Providers</option>
            </select>
            {errors.practiceSize && <p className="mt-1 text-xs text-red-600">{errors.practiceSize}</p>}
          </div>
        )}
      </div>

      {variant === "contact" ? (
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="monthlyCollections" className="mb-1 block text-xs font-semibold uppercase tracking-[0.08em] text-heading">
              Monthly Collections
            </label>
            <Input id="monthlyCollections" value={contactValues.monthlyCollections} onChange={(e) => onValueChange("monthlyCollections", e.target.value)} placeholder="$150,000" aria-invalid={Boolean(errors.monthlyCollections)} />
            {errors.monthlyCollections && <p className="mt-1 text-xs text-red-600">{errors.monthlyCollections}</p>}
          </div>
          <div>
            <label htmlFor="totalAccountsReceivable" className="mb-1 block text-xs font-semibold uppercase tracking-[0.08em] text-heading">
              Total Accounts Receivable
            </label>
            <Input id="totalAccountsReceivable" value={contactValues.totalAccountsReceivable} onChange={(e) => onValueChange("totalAccountsReceivable", e.target.value)} placeholder="$300,000" aria-invalid={Boolean(errors.totalAccountsReceivable)} />
            {errors.totalAccountsReceivable && <p className="mt-1 text-xs text-red-600">{errors.totalAccountsReceivable}</p>}
          </div>
        </div>
      ) : (
        <div>
          <label htmlFor="billingMethod" className="mb-1 block text-xs font-semibold uppercase tracking-[0.08em] text-heading">
            Current Billing Method
          </label>
          <select
            id="billingMethod"
            value={homepageValues.billingMethod}
            onChange={(e) => onValueChange("billingMethod", e.target.value)}
            className="h-10 w-full rounded-xl border border-primary/20 bg-medical-white px-3 py-2 text-sm text-foreground outline-none transition-all focus-visible:border-primary/40 focus-visible:ring-2 focus-visible:ring-primary/20"
            aria-invalid={Boolean(errors.billingMethod)}
          >
            <option value="">Select Billing Method</option>
            <option value="In-house Billing">In-house Billing</option>
            <option value="Outsourced Billing">Outsourced Billing</option>
            <option value="Switching Billing Partner">Switching Billing Partner</option>
          </select>
          {errors.billingMethod && <p className="mt-1 text-xs text-red-600">{errors.billingMethod}</p>}
        </div>
      )}

      <div>
        <label htmlFor="message" className="mb-1 block text-xs font-semibold uppercase tracking-[0.08em] text-heading">
          Message
        </label>
        <textarea
          id="message"
          rows={4}
          value={values.message}
          onChange={(e) => onValueChange("message", e.target.value)}
          placeholder="Tell us about your billing goals and challenges..."
          className="w-full rounded-xl border border-primary/20 bg-medical-white px-3 py-2 text-sm text-foreground outline-none transition-all placeholder:text-muted-text focus-visible:border-primary/40 focus-visible:ring-2 focus-visible:ring-primary/20"
          aria-invalid={Boolean(errors.message)}
        />
        {errors.message && <p className="mt-1 text-xs text-red-600">{errors.message}</p>}
      </div>

      <Button type="submit" size="lg" className="h-11 w-full text-sm transition-transform hover:scale-[1.01] sm:h-12 sm:text-base" disabled={isSubmitting}>
        {isSubmitting ? "Submitting..." : submitLabel ?? (variant === "contact" ? "Request Consultation" : "Schedule Free Consultation")}
      </Button>

      {variant === "contact" && (
        <p className="text-center text-xs text-muted-text">
          No obligation consultation with our billing experts.
        </p>
      )}

      {submitted && (
        <p className="m-0 rounded-xl border border-accent/25 bg-accent-soft px-3 py-2 text-sm text-heading">
          Thank you. Your consultation request has been received.
        </p>
      )}
    </form>
  );
}

