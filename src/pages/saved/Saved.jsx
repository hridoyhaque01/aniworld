import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";

const Saved = () => {
  const targetRef = useRef();

  const generatePDF = useReactToPrint({
    content: () => targetRef.current,
    documentTitle: "Userdata",
    onAfterPrint: () => alert("Data saved in PDF"),
  });

  return (
    <section className="flex flex-col gap-10 items-center justify-center h-full">
      <div
        className="max-w-[595px] mx-auto px-8 py-2 bg-white text-black"
        ref={targetRef}
      >
        <article className="overflow-">
          <div className="">
            <div className="flex items-center justify-between">
              <div className="flex flex-col gap-1">
                <h2 className="text-base font-medium">title</h2>
                <p className="text-xs">160/68 California</p>
                <p className="text-xs">1-888-123-8910</p>
              </div>
              <div className="">
                <h2 className="text-3xl text-blue font-bold tracking-tight uppercase">
                  INVOICE
                </h2>
              </div>
            </div>
            <div className="flex items-start justify-between  mt-11">
              <div className="flex flex-col gap-1">
                <h2 className="text-base font-semibold text-blue">
                  Invoice to:
                </h2>
                <p className="text-blue font-medium">Mahmud Saimon</p>
                <p className="text-xs">256/8 California</p>
                <p className="text-xs">1-888-123-8910</p>
              </div>
              <div className="flex flex-col gap-1">
                <h2 className="text-xs font-semibold text-blue flex items-center gap-2">
                  <span className="inline-block w-28 text-right">
                    Invoice number:
                  </span>
                  <span className="text-fadeColor">INV 10012</span>
                </h2>
                <h2 className="text-xs font-semibold text-blue flex items-center gap-2">
                  <span className="inline-block w-28 text-right">
                    Date Issued:
                  </span>
                  <span className="text-fadeColor">26/03/2021</span>
                </h2>
                <h2 className="text-xs font-semibold text-blue flex items-center gap-2">
                  <span className="inline-block w-28 text-right">
                    Due Date:
                  </span>
                  <span className="text-fadeColor">25/04/2021</span>
                </h2>
              </div>
            </div>
            <div className="">
              <div className="flex flex-col mx-0 mt-8">
                <table className="min-w-full divide-y divide-slate-500tk">
                  <thead>
                    <tr className="text-whiteHigh">
                      <th
                        scope="col"
                        className="text-left text-sm font-normal bg-blue"
                      >
                        <p className="py-4 pl-4 pr-3 ">Description</p>
                      </th>
                      <th
                        scope="col"
                        className="py-4 px-3 text-right text-sm font-normal  table-cell bg-blue"
                      >
                        Quantity
                      </th>
                      <th
                        scope="col"
                        className=" py-4 px-3 text-right text-sm font-normal  table-cell bg-blue"
                      >
                        Rate
                      </th>
                      <th
                        scope="col"
                        className="py-4 pl-3 pr-4 text-right text-sm font-normal   bg-blue"
                      >
                        Amount
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-whiteLow pb-1">
                      <td className="py-2 pl-4 pr-3 text-sm ">
                        <div className="font-medium ">man</div>
                      </td>
                      <td className="px-3 py-2 text-sm text-right  table-cell">
                        48
                      </td>
                      <td className="py-2 pr-3 text-sm text-right  table-cell">
                        0.00tk
                      </td>
                      <td className="py-2 pr-3 text-sm text-right  ">0.00tk</td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <th
                        scope="row"
                        colSpan="3"
                        className="py-2 pl-6 pr-3 text-sm font-light text-right  table-cell"
                      >
                        Subtotal
                      </th>

                      <td className="py-2 pl-3 pr-4 text-sm text-right  ">
                        0.00tk
                      </td>
                    </tr>
                    <tr>
                      <th
                        scope="row"
                        colSpan="3"
                        className=" py-2 pl-6 pr-3 text-sm font-light text-right  table-cell"
                      >
                        Discount
                      </th>

                      <td className="py-2 pl-3 pr-4 text-sm text-right  ">
                        -0.00tk
                      </td>
                    </tr>
                    <tr>
                      <th
                        scope="row"
                        colSpan="3"
                        className=" py-2 pl-6 pr-3 text-sm font-light text-right  table-cell"
                      >
                        Total
                      </th>

                      <td className="py-2 pl-3 pr-4 text-sm text-right  ">
                        0.00tk
                      </td>
                    </tr>
                    <tr>
                      <th
                        scope="row"
                        colSpan="3"
                        className="pb-3 pl-6 pr-3 text-sm font-light text-right  table-cell"
                      >
                        Paid Amount
                      </th>

                      <td className="pb-3 pl-3 pr-4 text-sm text-right  ">
                        -0.00tk
                      </td>
                    </tr>
                    <tr className="">
                      <th></th>
                      <th></th>
                      <th
                        scope="row"
                        className="py-4 pl-3 pr-4 text-sm text-right text-whiteHigh bg-blue"
                      >
                        Due Amount
                      </th>

                      <td className="py-4 pl-3 pr-4 text-sm text-right text-whiteHigh bg-blue">
                        0.00tk
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
            <div className="mt-16">
              <div>
                <h4 className="text-xs font-medium border-t border-blue inline-block px-4 py-2">
                  Signature
                </h4>
              </div>
            </div>
          </div>
        </article>
      </div>
      <div>
        <button
          className="btn bg-blue hover:bg-blue text-whiteHigh px-6 py-3 rounded-md"
          onClick={generatePDF}
        >
          download PDF
        </button>
      </div>
    </section>
  );
};

export default Saved;
