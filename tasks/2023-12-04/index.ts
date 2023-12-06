type ComplexCalculation<ValueType, ReturnType> = (value: ValueType) => ReturnType;

export function memoize<ValueType, ReturnType>(calculation: ComplexCalculation<ValueType, ReturnType>): ComplexCalculation<ValueType, ReturnType> {
    if (typeof calculation !== 'function') {
        throw Error('Function to be memoized must be a function.')
    }
    const memoizedResults = new Map<ValueType, ReturnType>;

    return (value: ValueType): ReturnType => {
        const memoizedValue = memoizedResults.get(value);

        if (memoizedValue !== undefined) {
            return memoizedValue;
        }

        const calculationResult = calculation(value);
        memoizedResults.set(value, calculationResult);

        return calculationResult
    }

}