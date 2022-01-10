const Features = () => (
  <div className="py-16 bg-gray-50 overflow-hidden lg:py-24">
    <div className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
      <div className="relative">
        <h2 className="text-center text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          Background check management redesigned.
        </h2>
        <p className="mt-4 max-w-3xl mx-auto text-center text-xl text-gray-500">
          All your background checks in one place. No more filing cabinets.
        </p>
      </div>

      <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
        <div className="relative">
          <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">
            View expiring background checks
          </h3>
          <p className="mt-3 text-lg text-gray-500">
            Reclerk visually highlights background checks that are expiring
            soon. You can quickly take action on high priority renewals and
            avoid delays.
          </p>
        </div>

        <div className="mt-10 -mx-4 relative lg:mt-0" aria-hidden="true">
          <img
            className="relative mx-auto"
            width={490}
            src="https://tailwindui.com/img/features/feature-example-1.png"
            alt=""
          />
        </div>
      </div>

      <div className="relative mt-12 sm:mt-16 lg:mt-24">
        <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div className="lg:col-start-2">
            <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">
              Quickly find and update docs
            </h3>
            <p className="mt-3 text-lg text-gray-500">
              No more searching through filing cabinets and trying to find the
              right document. Reclerk's table structure and editing features
              make it easy to find and update documents.
            </p>
          </div>

          <div className="mt-10 -mx-4 relative lg:mt-0 lg:col-start-1">
            <img
              className="relative mx-auto"
              width={490}
              src="https://tailwindui.com/img/features/feature-example-2.png"
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
        <div className="relative">
          <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">
            Securely store your employee data
          </h3>
          <p className="mt-3 text-lg text-gray-500">
            Reclerk stores all your employee data in a secure database. No more
            storing sensitive information in in open filing cabinets or in your
            job trailers.
          </p>
        </div>

        <div className="mt-10 -mx-4 relative lg:mt-0" aria-hidden="true">
          <img
            className="relative mx-auto"
            width={490}
            src="https://tailwindui.com/img/features/feature-example-1.png"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
);

export default Features;
