import MaxWidthWrapper from "../../../components/MaxWidthWrapper";
import Navbar from "../../../components/Navbar";
import RazorpayPaymentButton from "../../../components/RazorpayPaymentButton";
import { internshipDetails } from "../../../lib/constant";
import { ShieldCheck } from "lucide-react";
import Image from "next/image";
import { checkBoughtUserInternShipProgram } from "../../../serverAction/payment/checkBoughtIP";
import Receipt from "../../../components/Receipt";

export default async function RazorpayPayment({
  params,
}: {
  params: { paymentItem: string };
}) {
  const { paymentItem } = params;
  const internshipDetail = internshipDetails.find(
    (item) => item.internshipNo === paymentItem
  );

  const boughtProgram = await checkBoughtUserInternShipProgram(paymentItem);

  if (boughtProgram) {
    return (
      <section className="h-screen w-full">
        <Navbar />
        <MaxWidthWrapper className="flex items-center justify-center h-full w-full">
          <div className="max-w-5xl mx-auto bg-black/50 py-6 sm:px-6 px-4 rounded-xl bg-clip-padding backdrop-filter backdrop-blur-xl border border-gray-100/20">
            <div className="flex flex-col gap-4 w-full">
              <h1 className="sm:text-6xl text-4xl font-helveticaNowDisplayBold text-center  flex items-center justify-center gap-2 border-b border-gray-100/20 pb-4">
                Checkout{" "}
                <ShieldCheck className="sm:w-12 sm:h-12 w-9 h-9 text-green-500" />
              </h1>
              <div className="flex flex-col gap-2">
                <div className="flex gap-4 sm:px-4 px-2">
                  <div className="overflow-hidden rounded-xl w-1/3">
                    <Image
                      src={internshipDetail?.imageSrc as string}
                      alt={internshipDetail?.imageAlt as string}
                      width={150}
                      height={150}
                      layout="responsive"
                      className="object-cover"
                    />
                  </div>

                  <p className="sm:text-3xl text-2xl font-helveticaNowDisplayBold flex-1 flex-grow w-2/3 line-clamp-3 space-y-2">
                    <p>{internshipDetail?.name}</p>
                    <p className="sm:block hidden text-base text-gray-500 pt-2 border-t border-gray-100/20">
                      {internshipDetail?.description}
                    </p>
                  </p>
                </div>
                <div className="mt-4  w-full ">
                  <Receipt id={boughtProgram.recieptId as string} />
                </div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
    );
  }
  return (
    <section className="h-screen w-full">
      <Navbar />
      <MaxWidthWrapper className="flex items-center justify-center h-full w-full">
        <div className="max-w-5xl mx-auto bg-black/50 py-6 sm:px-6 px-4 rounded-xl bg-clip-padding backdrop-filter backdrop-blur-xl border border-gray-100/20">
          <div className="flex flex-col gap-4 w-full">
            <h1 className="sm:text-6xl text-4xl font-helveticaNowDisplayBold text-center  flex items-center justify-center gap-2 border-b border-gray-100/20 pb-4">
              Checkout{" "}
              <ShieldCheck className="sm:w-12 sm:h-12 w-9 h-9 text-green-500" />
            </h1>
            <div className="flex flex-col gap-2">
              <div className="flex gap-4 sm:px-4 px-2">
                <div className="overflow-hidden rounded-xl w-1/3">
                  <Image
                    src={internshipDetail?.imageSrc as string}
                    alt={internshipDetail?.imageAlt as string}
                    width={150}
                    height={150}
                    layout="responsive"
                    className="object-cover"
                  />
                </div>

                <p className="sm:text-3xl text-2xl font-helveticaNowDisplayBold flex-1 flex-grow w-2/3 line-clamp-3 space-y-2">
                  <p>{internshipDetail?.name}</p>
                  <p className="sm:block hidden text-base text-gray-500 pt-2 border-t border-gray-100/20">
                    {internshipDetail?.description}
                  </p>
                </p>
              </div>
              <div className="mt-4  w-full ">
                <RazorpayPaymentButton
                  amount={internshipDetail?.droppedPrice as number}
                  internshipNo={internshipDetail?.internshipNo as string}
                />
              </div>
              
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
