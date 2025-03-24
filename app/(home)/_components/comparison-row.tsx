import { Check, X } from "lucide-react";

function ComparisonRow({ feature, checklist}: {
    feature: string, checklist?: Array<boolean>
}) {
    return (
        <tr>
            <td className="p-4 bg-[#101320] md:bg-secondary/30">{feature}</td>
            {
                checklist?.map((check, index) => {
                    return (
                        <td key={index} className="p-4 text-center">{check? <Check className="inline-block text-green-500" /> : <X className="inline-block text-red-500" />}</td>
                    );
                })
            }
        </tr>
    );
}

export default ComparisonRow